const nodes = [
  { x: 50, y: 50, r: 7, core: true },
  { x: 18, y: 22, r: 4 },
  { x: 84, y: 20, r: 4 },
  { x: 14, y: 78, r: 4 },
  { x: 86, y: 76, r: 4 },
  { x: 50, y: 12, r: 3 },
  { x: 50, y: 90, r: 3 },
]

const edges: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 5],
  [2, 5],
  [3, 6],
  [4, 6],
  [1, 3],
  [2, 4],
]

export function NodeGraph() {
  return (
    <div className="mt-8 flex flex-1 items-end">
      <svg
        viewBox="0 0 100 100"
        className="h-auto w-full max-h-56"
        role="img"
        aria-label="Abstract diagram of connected microservice nodes"
      >
        <defs>
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(16,185,129,0.28)"
            strokeWidth="0.5"
            strokeDasharray="1.5 1.5"
          />
        ))}
        {nodes.map((node, i) => (
          <g key={i} filter="url(#node-glow)">
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 3}
              fill="none"
              stroke={node.core ? 'rgba(255,107,0,0.35)' : 'rgba(16,185,129,0.2)'}
              strokeWidth="0.4"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r / 2}
              fill={node.core ? '#FF6B00' : '#10B981'}
              className="animate-pulse-dot"
              style={{ animationDelay: `${i * 0.3}s`, transformOrigin: `${node.x}px ${node.y}px` }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

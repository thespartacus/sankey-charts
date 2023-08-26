import { Sankey, SankeyNode, SankeyLink, SankeyLabel } from 'reaviz';
import sankeyData from '../../data/data.json';

import './sankeyChart.css';

const SankeyChart = (props) => {
  const sankeyNodes = sankeyData.nodes;
  const sankeyLinks = sankeyData.links;

  const onNodeClick = nodeTitle => {
    console.log(nodeTitle);
  }

  return (
    <div className="chartContainer">
      <Sankey
        height={300}
        width={800}
        colorScheme="Spectral"
        nodeWidth={10}
        labelPosition="outside"
        nodes={sankeyNodes.map((node) =>
          <SankeyNode
            key={`node-${node.id}`}
            {...node}
            title={node.label}
            label={<SankeyLabel />}
            onClick={() => onNodeClick(node.title)}
          />
        )}
        links={sankeyLinks.map((link) => <SankeyLink key={`link-${link.source}`} {...link} gradient={true} />)}
      />
    </div>
  )
}

export default SankeyChart;

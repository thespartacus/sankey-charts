import { useEffect } from 'react';
import { connect } from "react-redux";
import { Sankey, SankeyNode, SankeyLink, SankeyLabel } from 'reaviz';

import { fetchSankeyData } from "../../store/fetchData";

import './sankeyChart.css';

const SankeyChart = (props) => {
  const updateData = data => {
    console.log("Fetched Data: ", data);
  }

  useEffect(() => {
    props.dispatch(fetchSankeyData());
  }, []);

  useEffect(() => {
    console.log("Sankey Data: ", props.sankeyData);
  }, [props.sankeyData]);

  // fetchedData(updateData);

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

const mapStateToProps = state => ({
  sankeyData: state.sankey.sankeyData
})

export default connect(mapStateToProps)(SankeyChart);

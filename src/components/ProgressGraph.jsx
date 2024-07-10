
import React from 'react';
import { Flex, Progress } from 'antd';

const ProgressGraph = () => {
  return (
    <Flex gap="small" vertical>
    <Progress percent={50} showInfo={false} />
  </Flex>
  );
};

export default ProgressGraph;

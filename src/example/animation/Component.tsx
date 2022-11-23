import React from 'react';
import { View} from 'react-native';
import Accordion from './Accordion';
import InnerComponent from './InnerComponent';
import { Props } from './index';

const AnimationExample: React.FC<Props> = (props: Props) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <View>
        <Accordion headerText="Unavailable Test"
          headerBody={<InnerComponent myprop={'animation'} />}
          isCollapse={true}
          bgcolor={'#EEEEEE'} />
      </View>
    </View>

  );
}

export default AnimationExample;

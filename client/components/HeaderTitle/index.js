import { View, Text } from 'react-native';
import { styles } from './styles';

const HeaderTitle = ({ title }) => {
  const headerStyles = styles;
  return (
    <View style={headerStyles.headerTitleView}>
      <Text style={headerStyles.headerText}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;

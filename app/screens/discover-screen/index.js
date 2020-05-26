 import * as React from 'react';
import {View,Text,Button,Image,TextInput} from 'react-native';
import {styles} from './style';

 import { Images } from '../../theme/images';

 import Carousel from 'react-native-snap-carousel';


//       {/* <Button
//           title="Next Screen"
//           onPress={() => props.navigation.navigate('library')}
//         /> */}
//       </View>
//     );
//   };
// _renderItem = ({item, index}) => {
//   return (
//       <View style={styles.slide}>
//           <Text style={styles.title}>{ item.title }</Text>
//       </View>
//   );
// }
export const Discover = (props) =>  {
    return (
      <View style={styles.CONTAINER}>
        <View style ={styles.BOX}>
        <View style={styles.SECTION}>
          <Image
          source={Images.discoversearch}style={styles.IMAGESTYLE}
          />
           <TextInput
            style={{ flex: 1 }}
            placeholder="Search Books,Author"
            underlineColorAndroid="transparent"
          />
         </View>
        <Text style={styles.TXT1}>Our Top Picks</Text>
         {/* <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                 onSnapToItem = { index => this.setState({activeIndex:index}) } /> */}
              
       </View> 
        
      </View>
    );
  }


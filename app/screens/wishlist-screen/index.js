import * as React from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './style';
import { Images } from '../../theme/images';
import { Info } from '../wishlist-screen/list';

const welcomedata = [
  {
    id: 0,
    title1: 'The Heart Of Hell',
    title2: 'Mitch Weiss',
    title3: 'Add to Cart',
    src: Images.librarybusiness,
  },

  {
    id: 1,
    title1: 'Adrennes 1994',
    title2: 'Antony Beevor',
    title3: 'Add to Cart',
    src: Images.librarybusiness,
  },

  {
    id: 2,
    title1: 'War on the Gothic Line',
    title2: 'Christian Jennings ',
    title3: 'Add to Cart',
    src: Images.librarybusiness,
  },
];

export const WishlistScreen = () => {
  // const [input, setdata] = React.useState(welcomedata);

  return (
    /* HEADER BLOCK */
    <View style={styles.CONTAINER}>
      <View style={styles.HEADER}>
        <View style={styles.TXTBOX}>
          <Text style={styles.TXT}> Search Books,Authors</Text>
        </View>
      </View>

      {/* Content Block */}
      <FlatList
        data={welcomedata}
        renderItem={({ item, index }) => (
          <Info
            src={item.src}
            title1={item.title1}
            title2={item.title2}
            title3={item.title3}
          />
        )}
        keyExtractor={(item, index) => index}
      />
      {/* <View style={styles.BOX1}>
        <View style={styles.IMGBOX}>
          <Image style={styles.PINK} source={Images.librarybusiness} />

          <View style={styles.INNER}>
            <Text style={styles.HEADING}> The Heart Of Hell</Text>
            <Text style={styles.SUBHEADING}>Mitch Weiss </Text>

            <View style={styles.BOTTOM}>
              <TouchableOpacity style={styles.BUTTON}>
                <Text> Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View> */}
    </View>
  );
};

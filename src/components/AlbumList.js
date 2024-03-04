import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView 
} from "react-native";
import albumData from "../json/Albums.json";


const Albumlist = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={{ fontSize: 17, fontWeight: 'bold'}}>{albumData[0].title}</Text>
            <Text style={{ fontSize: 10, fontWeight: "100"}}>{albumData[0].albumName}</Text>
            <Text style={{ fontSize: 12, fontWeight: "300"}}>{albumData[0].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                albumData[0].image
            }}
          />
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={{ fontSize: 17, fontWeight: 'bold'}}>{albumData[1].title}</Text>
            <Text style={{ fontSize: 10, fontWeight: "100"}}>{albumData[1].albumName}</Text>
            <Text style={{ fontSize: 12, fontWeight: "300"}}>{albumData[1].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
              albumData[1].image
            }}
          />
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
          <Text style={{ fontSize: 17, fontWeight: 'bold'}}>{albumData[2].title}</Text>
            <Text style={{ fontSize: 10, fontWeight: "100"}}>{albumData[2].albumName}</Text>
            <Text style={{ fontSize: 12, fontWeight: "300"}}>{albumData[2].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
              albumData[2].image
            }}
          />
        </View>
      </View>
      
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
          <Text style={{ fontSize: 17, fontWeight: 'bold'}}>{albumData[3].title}</Text>
            <Text style={{ fontSize: 10, fontWeight: "100"}}>{albumData[3].albumName}</Text>
            <Text style={{ fontSize: 12, fontWeight: "300"}}>{albumData[3].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
              albumData[3].image
            }}
          />
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={{ fontSize: 17, fontWeight: 'bold'}}>{albumData[4].title}</Text>
            <Text style={{ fontSize: 10, fontWeight: "100"}}>{albumData[4].albumName}</Text>
            <Text style={{ fontSize: 12, fontWeight: "300"}}>{albumData[4].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
              albumData[4].image
            }}
          />
        </View>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingBottom:10,
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  }

});

export default Albumlist;

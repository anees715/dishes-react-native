import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Dimensions, StyleSheet} from 'react-native';
import { Camera, Permissions } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class CameraComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      isCapturing: false,
      isImagePreview: false,
      capturedImage: ""
    };
    this.captureImage = this.captureImage.bind(this);
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async captureImage() {       
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.setState({capturedImage: photo.uri, isImagePreview: true})
     }
    }

  renderCamera(){
    const { hasCameraPermission } = this.state;
      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <View style={{ flex: 1 }}>
            <Camera 
              style={{ flex: 1 }} 
              type={this.state.type}
              ref={ (ref) => {this.camera = ref} }>
                <View
                  style={styles.bottomContainer}>
                  <MaterialCommunityIcons 
                        name="circle-outline"
                        size={80} 
                        color="#ffffff"
                        onPress={() => this.captureImage()} 
                        style={styles.clickButton} />
                </View>
            </Camera>
          </View>
        );
      }
    }

  renderPreview(){
    const { capturedImage } = this.state;
    const { onImageSelected } = this.props;
    return(
      <View style={{flex: 1}}>
        <ImageBackground source={{uri: capturedImage}} style={styles.image} resizeMode='cover'>
          <View style={styles.bottomContainer}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={80}
                color="green"
                onPress={() => onImageSelected(capturedImage)}
              />
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={80}
                color="red"
                onPress={() => this.setState({isImagePreview: false})}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  render() {
    const { isImagePreview } = this.state;
    return(
      <View style={{flex: 1}}>
        {isImagePreview ? this.renderPreview() : this.renderCamera() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null
  },
  clickButton: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20
  }
})
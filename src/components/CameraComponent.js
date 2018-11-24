import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions, StyleSheet} from 'react-native';
import { Camera, Permissions } from 'expo';

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
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity onPress={() => this.captureImage()}>
                    <Text>Click</Text>
                  </TouchableOpacity>
                </View>
            </Camera>
          </View>
        );
      }
    }

  renderPreview(){
    return(
      <View style={{flex: 1}}>
        <Image source={{uri: this.state.capturedImage}} />
      </View>
    )
  }

  render() {
    const { isImagePreview } = this.state;
    if(isImagePreview){
      return this.renderPreview();
    }
    else{
      return this.renderCamera();
    }
  }
}


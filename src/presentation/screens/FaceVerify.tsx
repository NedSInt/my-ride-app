// src/presentation/screens/FaceVerify.tsx
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { useState, useRef } from 'react';
import { View, Button } from 'react-native';

export default function FaceVerify() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    Camera.requestCameraPermissionsAsync().then(({ status }) =>
      setHasPermission(status === 'granted')
    );
  }, []);

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      // Aqui você envia para a API de verificação
    }
  };

  return (
    <View className="flex-1">
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type="front"
        onFacesDetected={(faces) => {
          if (faces.faces.length > 0) {
            console.log("Rosto detectado");
          }
        }}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
          runClassifications: FaceDetector.FaceDetectorClassifications.none,
        }}
      />
      <Button title="Verificar rosto" onPress={handleCapture} />
    </View>
  );
}

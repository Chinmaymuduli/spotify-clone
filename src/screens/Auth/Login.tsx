import {Box, Button, Text} from 'native-base';
import React from 'react';
import {authorize} from 'react-native-app-auth';

const Login = () => {
  const config = {
    clientId: '0cfd9586ce324ef7b3579a1a938446c5',
    redirectUrl: 'https://localhost:3000', // This should match the redirect URL specified in your Spotify Developer Dashboard
    scopes: ['user-read-private', 'user-read-email'], // Add any additional scopes you require
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
  };
  const authenticateSpotify = async () => {
    try {
      console.log('object');
      const result = await authorize(config);
      // Handle the successful authentication response
      console.log(result);
    } catch (error) {
      // Handle the authentication error
      console.error({error});
    }
  };

  return (
    <Box flex={1} alignItems={'center'} justifyContent={'center'}>
      <Button onPress={authenticateSpotify}>
        <Text color={'white'}>Sign in with spotify</Text>
      </Button>
    </Box>
  );
};

export default Login;

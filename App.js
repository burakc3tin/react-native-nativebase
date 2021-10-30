import React, { Component } from 'react';
import { View, Text } from 'react-native';
 
import {
  ScrollView,
  VStack,Modal,
  Input,IconButton,
  Stack,Divider,WarningOutlineIcon,
  Center,Link,Select,Menu,
  HamburgerIcon,
  Box,
  Pressable,
  useTheme,FormControl,
  Heading,Radio,Slider,
  Button,ButtonGroup,
  HStack,Checkbox,Switch,
  NativeBaseProvider,
} from "native-base"
 
export default class App extends Component {
 

  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
          
          <Center mt="8">

  <Button bgColor="secondary.700" w="50%">Merhaba Dünya</Button>
  <Button mt="3" bgColor="primary.500" w="50%">Merhaba Dünya</Button>
  <Button mt="3" bgColor="tertiary.500" w="50%">Merhaba Dünya</Button>
  <Button mt="3" bgColor="warning.700" w="50%">Merhaba Dünya</Button>


  <HStack mt="5" space={6}>
      <Checkbox  value="test" accessibilityLabel="This is a dummy checkbox" />
      <Checkbox
        value="test"
        accessibilityLabel="This is a dummy checkbox"
        defaultIsChecked
      />
  </HStack>


  <VStack mt="5" space={3} alignItems="flex-start">
      <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
        Danger
      </Checkbox>
      <Checkbox value="info" colorScheme="info" defaultIsChecked>
        Info
      </Checkbox>
      <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
        Orange
      </Checkbox>
      <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
        Purple
      </Checkbox>
    </VStack>
    <Stack
        space={2.5}
        alignSelf="center"
        px="4"
        safeArea
        mt="4"
        w={{
          base: "100%",
          md: "25%",
        }}
      >
        <Box>
        
          <FormControl mb="5">
            <FormControl.Label>Project Title</FormControl.Label>
            <Input />
            <FormControl.HelperText>
              Give your project a title.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
        <Box>
          
          <FormControl isDisabled mb="5">
            <FormControl.Label
              _disabled={{
                _text: {
                  color: "gray.400",
                  fontWeight: "bold",
                },
              }}
            >
              Project Title
            </FormControl.Label>
            <Input placeholder="Title" />
            <FormControl.HelperText>
              Give your project a title.
            </FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
        <Box>
          
          <FormControl isInvalid>
            <FormControl.Label>Project Title</FormControl.Label>
            <Input placeholder="Title" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Something is wrong.
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
      </Stack>

      <Stack
      mt={3}
      space={4}
      w={{
        base: "75%",
        md: "25%",
      }}
    >
      <Center>
         
      </Center>
      <Input size="xs" placeholder="xs Input" />
      <Input size="sm" placeholder="sm Input" />
      <Input size="md" placeholder="md Input" />
      <Input size="lg" placeholder="lg Input" />
      <Input size="xl" placeholder="xl Input" />
      <Input size="2xl" placeholder="2xl Input" />
    </Stack>


    <Link   mt="10" bgColor="purple.100" mt={4} href="https://nativebase.io">
      Click here to open documentation.
    </Link>

    <Radio.Group
      mt="5"
      defaultValue="1"
      name="myRadioGroup"
      accessibilityLabel="Pick your favorite number"
    >
      <Radio value="1" my={1}>
        First
      </Radio>
      <Radio value="2" my={1}>
        Second
      </Radio>
      <Radio value="3" my={1}>
        Third
      </Radio>
    </Radio.Group>
    <Select
        mt="8"
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>

      <Slider
      mt="8"
      width="80%"
        defaultValue={70}
        minValue={0}
        maxValue={100}
        accessibilityLabel="hello world"
        step={10}
      >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <HStack alignItems="center" space={4}>
      <Text>Bluetooth</Text>
      <Switch size="sm" />
    </HStack>

          </Center>
        </ScrollView>
      </NativeBaseProvider>

    );
  }
}

 

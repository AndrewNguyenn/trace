import { Box, Text } from '@chakra-ui/react'

type Props = {
  size: string; // lg, md, sm
  text: string;
}

const Header = ({ size, text }: Props) => {
  
  let resize;
  let dividerSize;
  let width;

  switch(size) {
    case 'lg': 
      resize = '2.5em'
      dividerSize = '21em'
      width = '400px'
      break;
    case 'md': 
      resize = '2em'
      dividerSize = '17em'
      width = '300px'
      break;
    case 'sm': 
      resize = '1.5em'
      dividerSize = '13em'
      width = '500px'
      break;
  }

  return (
      <Box 
          fontSize={resize} 
          fontWeight={'bold'} 
          color='blue.900' 
          borderRadius="10px"
          w={width}
      >
        <Text fontWeight={'bold'} color='blue.900' display='flex' alignItems='center' >
          {text}
        </Text>
      </Box>
  )
}

export default Header;
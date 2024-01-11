

/** @jsxImportSource @emotion/react */

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, Button, Center, Checkbox, HStack, Input, option, Select, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, set_val } from "/utils/state"
import NextHead from "next/head"



export function Button_2ccf1a8d5620b40f8c5a77cedbb8b740 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__checkbox_state = useContext(StateContexts.state__checkbox_state)

  const on_click_f5722005fd0527ca363a7fa3f895b0b5 = useCallback((_e) => addEvents([Event("_set_clipboard", {content:state__checkbox_state.passwordf})], (_e), {}), [addEvents, Event, state__checkbox_state])

  return (
    <Button colorScheme={`whiteAlpha`} onClick={on_click_f5722005fd0527ca363a7fa3f895b0b5} sx={{"height": "2em"}} variant={`solid`}>
  {`📋`}
</Button>
  )
}

export function Checkbox_e1fdca76f809372d76379733721db3d0 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_ef967c8b67b80c8b56a8e8b1433164bb = useCallback((_e0) => addEvents([Event("state.checkbox_state.set_checkednums", {value:_e0.target.checked})], (_e0), {}), [addEvents, Event])

  return (
    <Checkbox onChange={on_change_ef967c8b67b80c8b56a8e8b1433164bb} sx={{"color": "white"}} value={`true`}>
  {`Include Numbers`}
</Checkbox>
  )
}

export function Checkbox_ca229305fa59b0dbe6796e63de48b7ea () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_0da6b80f130f35360933022fb5f9c96e = useCallback((_e0) => addEvents([Event("state.checkbox_state.set_checkedupper", {value:_e0.target.checked})], (_e0), {}), [addEvents, Event])

  return (
    <Checkbox onChange={on_change_0da6b80f130f35360933022fb5f9c96e} sx={{"color": "white"}} value={`true`}>
  {`Include Uppercase Characters`}
</Checkbox>
  )
}

export function Input_e7dd0d5c28608410418749c85108ff16 () {
  const state__checkbox_state = useContext(StateContexts.state__checkbox_state)


  return (
    <Input focusBorderColor={`#6666ff`} isReadOnly={true} sx={{"width": "30em", "border": "1px solid #6666ff", "height": "2em", "_hover": {"border": "1px solid #6666ff"}, "color": "white"}} type={`text`} value={state__checkbox_state.passwordf}/>
  )
}

export function Checkbox_48734dd99167056b43537fe74aa5e8b8 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_2ed3759d46b78205f083852380f22825 = useCallback((_e0) => addEvents([Event("state.checkbox_state.set_checkedlower", {value:_e0.target.checked})], (_e0), {}), [addEvents, Event])

  return (
    <Checkbox onChange={on_change_2ed3759d46b78205f083852380f22825} sx={{"color": "white"}} value={`true`}>
  {`Include Lowercase Characters`}
</Checkbox>
  )
}

export function Button_77d74e544d82e1a15cee50e19bc2d81e () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ba0aaaf56a3d4403e89a9cfd650739ce = useCallback((_e) => addEvents([Event("state.checkbox_state.passwordgen", {})], (_e), {}), [addEvents, Event])

  return (
    <Button colorScheme={`whiteAlpha`} onClick={on_click_ba0aaaf56a3d4403e89a9cfd650739ce} sx={{"height": "2em"}} variant={`solid`}>
  {`Generate Password`}
</Button>
  )
}

export function Select_a821b05b4a0bc7465362564d33501570 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_b6014e536e5537b56b68223022cc5084 = useCallback((_e0) => addEvents([Event("state.checkbox_state.set_length", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <Select onChange={on_change_b6014e536e5537b56b68223022cc5084} placeholder={`Select the length of the password`} sx={{"backgroundColor": "lightblue", "color": "#6666ff"}}>
  <option value={`8`}>
  {`8`}
</option>
  <option value={`9`}>
  {`9`}
</option>
  <option value={`10`}>
  {`10`}
</option>
  <option value={`11`}>
  {`11`}
</option>
  <option value={`12`}>
  {`12`}
</option>
  <option value={`13`}>
  {`13`}
</option>
  <option value={`14`}>
  {`14`}
</option>
  <option value={`15`}>
  {`15`}
</option>
  <option value={`16`}>
  {`16`}
</option>
  <option value={`17`}>
  {`17`}
</option>
  <option value={`18`}>
  {`18`}
</option>
  <option value={`19`}>
  {`19`}
</option>
  <option value={`20`}>
  {`20`}
</option>
</Select>
  )
}

export function Input_903757eeac5b479feb4bc5dd2afcd478 () {
  const state__checkbox_state = useContext(StateContexts.state__checkbox_state)


  return (
    <Input focusBorderColor={`lightblue`} isReadOnly={true} placeholder={("Strength : " + state__checkbox_state.strength)} sx={{"width": "10em", "border": "1px solid lightblue", "height": "2em", "_hover": {"border": "1px solid lightblue"}}} type={`text`}/>
  )
}

export function Checkbox_7eaf2ed7cef241fca5ad8e4c187bb0bc () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_c94c7d7ff1e9b11628fa86fd9cb7c15b = useCallback((_e0) => addEvents([Event("state.checkbox_state.set_checkedsym", {value:_e0.target.checked})], (_e0), {}), [addEvents, Event])

  return (
    <Checkbox onChange={on_change_c94c7d7ff1e9b11628fa86fd9cb7c15b} sx={{"color": "white"}} value={`true`}>
  {`Include Symbols`}
</Checkbox>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Center sx={{"paddingY": "5.5em", "fontSize": "2em", "textAlign": "center", "backgroundImage": "linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)"}}>
  <VStack>
  <Box sx={{"marginBottom": "175px", "fontSize": ".5em"}}>
  <VStack spacing={`1em`} sx={{"fontFamily": "Tahoma", "color": "#f2ff00"}}>
  <Box sx={{"border": "3px dotted black", "padding": "30px", "fontFamily": "Lucida Console", "fontWeight": "bold"}}>
  <Text sx={{"fontSize": "3em", "backgroundImage": "linear-gradient(271.68deg, #FDFCFB 0.75%, #E2D1C3 88.52%)", "backgroundClip": "text"}}>
  {`NEXTPY PASSWORD GEN WEB APPLICATION`}
</Text>
</Box>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Text sx={{"fontSize": "1em", "fontFamily": "Comic Sans Ms", "backgroundImage": "linear-gradient(109.6deg, rgb(255, 230, 109) 11.2%, rgb(87, 232, 107) 100.2%)", "backgroundClip": "text"}}>
  {`🫵'Treat your password like your toothbrush. Don't let anybody else use it, and get a new one every six months.'🫵`}
</Text>
  <Text sx={{"fontSize": "1em"}}>
  {`- Clifford Stoll`}
</Text>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Text sx={{"fontSize": "2em", "color": "black", "backgroundImage": "linear-gradient(180.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)", "backgroundClip": "text"}}>
  {`▼ Scroll Down ▼`}
</Text>
</VStack>
</Box>
  <Box sx={{"width": "20em", "height": "20em", "backgroundImage": "linear-gradient(90,#AF40FF,#5B42F3 50%,#00DDEB)", "backdropFilter": "blur(40px)", "border": "5px solid white", "borderRadius": "10px", "shadow": "0 0 150px rgba(0,0,0,0.5)"}}>
  <VStack>
  <Box sx={{"fontFamily": "Monospace", "margin": "20px", "border": "1px solid white", "borderRadius": "10px", "padding": "10px", "color": "white"}}>
  {`PASSWORD GENERATOR`}
</Box>
  <Box>
  <VStack sx={{"borderRadius": "10px", "backgroundColor": "#6666ff"}}>
  <Text>
  {` `}
</Text>
  <HStack>
  <Text>
  {` `}
</Text>
  <Input_e7dd0d5c28608410418749c85108ff16/>
  <Button_2ccf1a8d5620b40f8c5a77cedbb8b740/>
  <Text>
  {` `}
</Text>
</HStack>
  <Text>
  {` `}
</Text>
</VStack>
</Box>
  <Box>
  <VStack>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Input_903757eeac5b479feb4bc5dd2afcd478/>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Select_a821b05b4a0bc7465362564d33501570/>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Checkbox_7eaf2ed7cef241fca5ad8e4c187bb0bc/>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Checkbox_e1fdca76f809372d76379733721db3d0/>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Checkbox_48734dd99167056b43537fe74aa5e8b8/>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Checkbox_ca229305fa59b0dbe6796e63de48b7ea/>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Text>
  {` `}
</Text>
  <Button_77d74e544d82e1a15cee50e19bc2d81e/>
</VStack>
</Box>
</VStack>
</Box>
</VStack>
</Center>
  <NextHead>
  <title>
  {`Centered Box`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

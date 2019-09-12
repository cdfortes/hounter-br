import styled from "styled-components"
import { Link } from "gatsby"

import { Colors } from "../../../data"

export const Container = styled.header`
  background-color: ${Colors.primary};
  padding: 20px;
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px ${Colors.darker};
  margin-bottom: 30px;
`

export const Logo = styled(Link)`
  border: none;
  line-height: 28px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: 3px;
  font-family: "Righteous", sans-serif;
  color: ${Colors.secondary} !important;
  text-shadow: 0 0 1px ${Colors.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  text-align: center;
  background-color: ${Colors.primary};
`

export const LogoFrame = styled.div`
  position: relative;
  width: 50px;
  max-width: 50px;
  height: 50px;
  max-height: 50px;
  border: 2px solid #fff;
`

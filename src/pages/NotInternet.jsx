import styled from "styled-components"
import Button from "../ui/Button"
import { useMoveBack } from "../hooks/useMoveBack"

const StyledNotInternet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  overflow: hidden;
  gap: 2rem;
  width: 100%;
`

function NotInternet() {
  const moveBack = useMoveBack()
  return (
    <StyledNotInternet>
        <h1>انگار یکی رفته پاش رو سیم!</h1>
        <h3>اینترنت خود را بررسی کنید و روی دکمه زیر کلیک کنید</h3>
        <Button onClick={moveBack}>تلاش دوباره</Button>
    </StyledNotInternet>
  )
}

export default NotInternet

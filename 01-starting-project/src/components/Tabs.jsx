export default function Tabs({ children, buttons, buttonsContainer="menu" }) {
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
            {buttons} 
            </ButtonsContainer>
            {children}
        </>
    );
}
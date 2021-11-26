import { Button as ButtonBootstrap } from 'react-bootstrap';

const Button = ({title, variant, type, action}) => {
    return ( 
        <ButtonBootstrap 
            variant={variant} 
            onClick={action} 
            type={type}>
                {title}
        </ButtonBootstrap>
    )
}

export default Button;

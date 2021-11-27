import { Figure } from 'react-bootstrap';

const FigureComponent = ({name, image, children}) => {
    return (
        <Figure>
            <Figure.Image src={image.url} width={171} height={180} alt={name} />
            <Figure.Caption>
                <p>{name}</p>
                {children}
            </Figure.Caption>
        </Figure>
    )
}

export default FigureComponent;

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import './styles/EnquiryBox.css';

export const EnquiryBox  = ({ open, setClose}) =>  {
        return (
        <div className={`enquiry-box "  ${open? "open" : "close"}`}>
            <button
                onClick={() => setClose()}
                type="button"
                className="close-button"
                style={{backgroundImage:"/jtyq-frontend/close.png", borderRadius:'10px'}}
            >
            </button>
            <h2>Enquiry</h2>
            <Form className="form">
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@example.com"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEnquiry">Enquiry</Label>
                <Input
                type="textarea"
                name="enquiry"
                id="exampleEnquiry"
                rows="4"
                />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        </div>
    );
}

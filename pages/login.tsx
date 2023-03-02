import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login()
{
    return (
        <div className='d-flex justify-content-center mt-3'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>帳號</Form.Label>
                    <Form.Control type="email" placeholder="輸入帳號" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" placeholder="輸入密碼" />
                </Form.Group>
            <Button variant="primary" type="submit">
                登入
            </Button>
            </Form>
        </div>
    )
}
import { Form } from './Form';

export const Parent = () => {
    const logFormData = (data) => {
        console.log("Parent component is logging the data from the child.",data);
    }

    return (
        <div>
            <h2>Parent</h2>
            <Form logFormData={logFormData} />
        </div>
    );
}
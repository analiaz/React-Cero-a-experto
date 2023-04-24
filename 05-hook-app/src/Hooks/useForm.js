import { useState } from "react";

const useForm = ( initialForm = {}) => {
    
    const [formState, setFormState] = useState( initialForm);

    const onInputChange = ( target ) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = ( ) => {
        setFormState( initialValue );
    }
    
    return {
        onResetForm,
        ...formState,
        formState,
        onInputChange
    }
}

export default useForm

import { useForm } from 'react-hook-form'
import Button from '@etaui/button'
import Input from '@etaui/input'
import Textarea from '@etaui/textarea'
import styles from './index.scss'

const FormContactusComponent = () => {
    const { register, handleSubmit, formState, errors } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        submitFocusError: true,
        nativeValidation: false,
        defaultValues: {
          contactemail: 'bluebill1049@hotmail.com',
          contacttextarea: '¡Hello world...!'
        }
    })
    
    const onSubmit = data => alert(`Welcome ${data.contactemail}. Thanks for tell me ${data.contacttextarea}`)
    
    return (
        <>
            <h2>Let's talk about your project</h2>
            <div className={styles.formContactWrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.contactWrapper}>
                    
                        <div className={styles.formInputWrapper}>
                            <Input type='email' name='contactemail' id='contactemail' ref={register({ required: true, pattern: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i })} label='contactemail' placeholder='Your email' autoComplete={false} />
                                {errors.contactemail && errors.contactemail.type === 'required' && (<span className={styles.errorInput}>This field is required</span>)}
                                {errors.contactemail && errors.contactemail.type === 'pattern' && (<span className={styles.errorInput}>Please insert a valid email</span>)}
                        </div>

                        <div className={styles.formInputWrapper}>
                            {/* <Input type='text' name='text' id='text' ref={register({ required: true })} label='text' placeholder='Tell us about...' autoComplete={false} />
                                {errors.text && errors.text.type === 'required' && (<span className={styles.errorInput}>This field is required</span>)} */}
                            <Textarea rows={5} cols={10} name='contacttextarea' id='contacttextarea' ref={register({ required: true })} disabled={!true} label='contacttextarea' placeholder='Tell us about...' readonly={false}></Textarea>
                                {errors.contacttextarea && errors.contacttextarea.type === 'required' && (<span className={styles.errorInput}>This field is required</span>)}
                                {errors.contacttextarea && errors.contacttextarea.type === 'pattern' && (<span className={styles.errorInput}>Please insert a valid email</span>)}
                        </div>
                        <div className={styles.formContactButtonWrapper}>
                            <Button disabled={!formState.isValid} label='sendemail'>Send email</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormContactusComponent
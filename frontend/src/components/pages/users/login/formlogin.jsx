import { useForm } from 'react-hook-form'
import Button from '@etaui/button'
import Input from '@etaui/input'
import dynamic from 'next/dynamic'
import styles from './index.scss'
const Link = dynamic(() => import('@etaui/link'))
const LoginSVGR = dynamic(() => import('@svgr/login'))

const FormLoginComponent = () => {
    const { register, handleSubmit, formState, errors } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        submitFocusError: true,
        nativeValidation: false,
        defaultValues: {
          email: 'bluebill1049@hotmail.com',
          password: 'thepassword'
        }
    })
    
    const onSubmit = data => alert(`Welcome ${data.email}`)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <div className={styles.login}>
                    <div className={styles.imgWrapper}>
                        <LoginSVGR className={styles.img} size={300} color='#26184D' />
                    </div>
                    <div className={styles.loginWrapper}>
                        <div className={styles.loginForm}>
                            <div className={styles.formInputWrapper}>
                                <Input type='email' name='email' id='email' ref={register({ required: true, pattern: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/i })} label='email' placeholder='Email' autoComplete={false} />
                                    {errors.email && errors.email.type === 'required' && (<span className={styles.errorInput}>This field is required</span>)}
                                    {errors.email && errors.email.type === 'pattern' && (<span className={styles.errorInput}>Please insert a valid email</span>)}
                            </div>
                            <div className={styles.formInputWrapper}>
                                <Input type='password' name='password' id='password' ref={register({ required: true })} label='password' placeholder='Password' autoComplete={false} />
                                    {errors.password && errors.password.type === 'required' && (<span className={styles.errorInput}>This field is required</span>)}
                            </div>
                            <Button disabled={!formState.isValid} label='login'>Log in</Button>
                        </div>
                        <div className={styles.loginWrapperBottom}>
                            <Link href={'/'} label='forgotPassword' ><span className={styles.forgotPassword}>Forgot password?</span></Link>
                            <p className={styles.invitetoSignup}>Don't have an account yet? <Link href={'/'} label='singup'><span className={styles.singup}>Sign up</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormLoginComponent
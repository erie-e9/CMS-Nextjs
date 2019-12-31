import { createToken } from '../auth'

describe('#createToken', () => {
	it('should have createToken method', async () => {
		const user = {
			_id: '1',
			uusername: 'username',
			uemail: 'password',
			uprivilege: 'username@email.com',
			uactiveaccount: true
		}

		const [ token ] = await createToken(user)

		expect(token.length).toBe(477)
	})
})

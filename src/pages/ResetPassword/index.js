import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { ForgotPassowrdContainer } from './styles';
import { SubmitButton } from '~/styles/components/Button';

import { resetPasswordRequest } from '~/store/modules/auth/actions';

const schemaValidation = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characteres')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'Password must match'
  ),
});

export default function ForgotPassword() {
  const dispatch = useDispatch();

  function handleSubmit({ newPassword, confirmPassword }) {
    dispatch(resetPasswordRequest(newPassword, confirmPassword));
  }

  return (
    <>
      <ForgotPassowrdContainer>
        <h2>Reset Password</h2>

        <Form schema={schemaValidation} onSubmit={handleSubmit}>
          <Input
            name="newPassword"
            type="password"
            placeholder="New password"
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />

          <SubmitButton>Reset Password</SubmitButton>
        </Form>
      </ForgotPassowrdContainer>
    </>
  );
}

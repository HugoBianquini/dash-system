/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/function-component-definition */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { DeepRequired, FieldValues } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: DeepRequired<FieldValues>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest }: InputProps,
  ref,
) => (
  <FormControl isInvalid={!!error}>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <ChakraInput
      name={name}
      id={name}
      type="email"
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: 'gray.900',
      }}
      size="lg"
      ref={ref}
      {...rest}
    />

    {
      // @ts-ignore - There's a type issue in react-hook-form
      !!error && <FormErrorMessage>{error.message}</FormErrorMessage>
    }
  </FormControl>
);

export const Input = forwardRef(InputBase);

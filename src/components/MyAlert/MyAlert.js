import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function MyAlert({ message, status, errDescription }) {
  return (
    <>
      <Alert
        status={status}
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          {message}
        </AlertTitle>
        <AlertDescription maxWidth="sm">{errDescription}</AlertDescription>
      </Alert>
    </>
  );
}
export default MyAlert;

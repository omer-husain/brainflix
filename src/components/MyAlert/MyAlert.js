import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

// uses third party libray to quickly generate alert message, styling taken care of, passing in
// message, status to generate different alerts

function MyAlert({ message, status }) {
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
      </Alert>
    </>
  );
}
export default MyAlert;

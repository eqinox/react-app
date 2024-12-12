"use client"
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <Container maxWidth="sm">
        <Image
          src="/404-illustration.svg" // Add an illustration or image in the `public` folder
          alt="Page not found"
          width={300}
          height={300}
          style={{ marginBottom: '1rem' }}
        />
        <Typography variant="h6" sx={{ mb: 4 }}>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" size="large" color="primary" sx={{ px: 4 }}>
            Go Home
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

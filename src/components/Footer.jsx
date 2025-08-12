import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from '@mui/material';


function Footer() {
  const FooterData = [
    {
      title: 'Home',
      links: ['Become Affiliate', 'Go Unlimited', 'Services'],
    },
    {
      title: 'Products',
      links: [
        'Design Systems',
        'Themes & Templates',
        'Mockups',
        'Presentations',
        'UI Kits',
      ],
    },
    {
      title: 'Legals',
      links: ['License', 'Refund Policy', 'About Us', 'Contacts'],
    },
    {
      title: 'Blog',
      links: ['Business Stories', 'Digital Store', 'Learning', 'Social Media'],
    },
  ];

  const SocialIcons = [
    { icon: <FacebookIcon />, href: '#' },
    { icon: <TwitterIcon />, href: '#' },
    { icon: <InstagramIcon />, href: '#' },
  ];

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', py: 6 }}>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={4}
        >
              
          {/* Left side: Logo */}
          <Grid
            item
            xs={12}
            md={2}
            sx={{ display: 'flex',  alignItems: 'center' }}
          >
            <img
              src="degic-1.png"
              alt="Logo"
              style={{ maxWidth: '80%', height: 'auto' }}
            />
          </Grid>

          {/* Middle: Footer links */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={7}>
              {FooterData.map((section, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Typography variant="h6" gutterBottom>
                    {section.title}
                  </Typography>
                  {section.links.map((link, linkIndex) => (
                    <Link
                      href="#"
                      underline="none"
                      color="inherit"
                      display="block"
                      sx={{ my: 0.5 }}
                      key={linkIndex}
                    >
                      {link}
                    </Link>
                  ))}
                </Grid>
              ))}
            </Grid>
          <hr className='text-gray-600 mt-2' />
          </Grid>

          {/* Right side: Social icons aligned fully right */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              mt: "30px"
            }}
          >
            <Typography variant="h6" gutterBottom>
              Follow Us
              
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {SocialIcons.map((social, idx) => (
                <IconButton
                  key={idx}
                  href={social.href}
                  sx={{ color: '#fff' }}
                  aria-label={`Follow on social media ${idx}`}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          <h1 className="text-gray-500 mt-3">Copyright Degic © {new Date().getFullYear()}</h1>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;

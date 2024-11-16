import React from 'react';
import { Box, Typography, Avatar, IconButton, Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

const posts = [
  {
    username: "muskan_gupta5848",
    time: "3d",
    content: "@lots_of_happiness_ 💖",
    likes: 48,
    comments: 2,
    shares: 2,
    avatar: "https://via.placeholder.com/40", // Placeholder for the avatar
  },
  {
    username: "prabavathik3",
    time: "3d",
    content: "☁️🔥☁️✨✨",
    likes: 45,
    comments: 0,
    shares: 0,
    avatar: "https://via.placeholder.com/40",
  },
  {
    username: "pyaariradhaki",
    time: "3d",
    content: "Happy birthday mere shyam baba.. 🎂🎉🪅",
    likes: 158,
    comments: 1,
    shares: 1,
    avatar: "https://via.placeholder.com/40",
  },
];

const LikePost = () => {
  return (
    <Box 
      sx={{
        backgroundColor: "Peach",
        color: "black",
        borderRadius: 2,
        padding: 2,
        width: "100%",
        maxWidth: 600,
        mx: "auto",
        margin: "auto",
        marginTop: 10,
        marginBottom: 10,
        boxShadow: 5
      }}
    >
      {posts.map((post, index) => (
        <Box
          key={index}
          sx={{
            borderBottom: "1px solid #333",
            paddingBottom: 2,
            marginBottom: 2,
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={post.avatar} alt={post.username} />
            <Box>
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{ fontSize: "0.9rem" }}
              >
                {post.username}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Picked for you · {post.time}
              </Typography>
            </Box>
          </Stack>
          <Typography variant="body2" sx={{ marginTop: 1 , paddingLeft: 7  }}>
            {post.content}
          </Typography>
          <Stack direction="row" alignItems={"center"} spacing={1} sx={{ marginTop: 1, paddingLeft: 6 }}>
            <IconButton size="small" sx={{ color: "black" }}>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography variant="caption">{post.likes}</Typography>
            <IconButton size="small" sx={{ color: "black" }}>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <Typography variant="caption">{post.comments}</Typography>
            <IconButton size="small" sx={{ color: "black" }}>
              <ShareIcon />
            </IconButton>
            <Typography variant="caption">{post.shares}</Typography>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default LikePost;

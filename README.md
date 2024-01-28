# Message Board Application

## Overview

The Message Board application is a full-stack web application designed to showcase real-time communication capabilities using WebSockets. It allows users to select different discussion channels, view messages within those channels, and post new messages, which are instantly visible to all users.

## Features

- **Channel Selection**: Users can select from a predefined list of discussion channels.
- **Message Viewing**: Displays all messages within the selected channel.
- **Message Posting**: Users can post new messages to the selected channel, which appear in real-time.
- **Real-Time Updates**: Utilizes WebSockets for real-time broadcasting of new messages to all connected clients.

## Technology Stack

- **Frontend**: React, CSS Modules for styling, `socket.io-client` for WebSocket communication.
- **Backend**: Node.js, Express for RESTful API, `socket.io` for WebSocket server, in-memory storage for channels and messages.

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- Basic knowledge of React and Node.js

### Installation

1. Clone the repository:

```bash
git clone https://your-repository-url.git
cd message-board-app
```

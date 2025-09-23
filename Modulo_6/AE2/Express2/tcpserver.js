import { createServer } from 'net';

const server = createServer((socket) => {
    console.log('New connection from', socket.remoteAddress, socket.remotePort);

    socket.on('data', (data) => {
        console.log('Received:', data.toString());
        // Echo back the received data
        socket.write(data);
    });

    socket.on('end', () => {
        console.log('Connection ended');
    });

    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`TCP server listening on port ${PORT}`);
});

server.on('error', (err) => {
    console.error('Server error:', err);
});
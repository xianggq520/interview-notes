# TCP

Transmission control protocol (TCP)

# UDP

user datagram protocol (UDP)

# TCP和UDP的10大区别

Transmission control protocol (TCP) drives reliable data transfers. In contrast, user datagram protocol (UDP) prioritizes speed and efficiency, which are crucial to internet operations.

传输控制协议 （TCP） 驱动可靠的数据传输。相比之下，用户数据报协议 （UDP） 优先考虑速度和效率，这对互联网运营至关重要。


1. TCP 面向连接（message-oriented） UDP面向消息（message-oriented） 无连接connectionless
2. TCP 传输慢，可靠，费带宽，数据包序号错误会重新完成3次握手后再进行数据传输   UDP速度快，但不校验数据传输，会主动丢包

   - TCP基于连接发送数据
   - 三次握手建立连接后才会发送数据，连接中断后，数据传输也会中断
   - `sequence number`控制数据包按顺序发送
   - 收到ACK确认报文后才会发送下一个数据包
   - TCP 使用流量和拥塞控制机制来确保数据不会丢失、损坏、复制或乱序传送。

3. TCP 有更多的`error-check`机制, UDP只做基本的`checksum`字段错误检查

     - 超时后须重连后再数据传输
     - 每个数据包的头部都会添加16位`checksum`字段，校验数据完整性
     - 每一次数据传输，server都会发送一个`ACK`报文，client须回复一个 `ACK+1`的报文，确认数据传输完毕
  
4. TCP以特定的顺序传输数据，发送的每个数据片段都带有`sequence number`，UDP无顺序，并且会丢弃无法处理的数据包
5. TCP无法用在多播和广播服务，是理想的面向连接、端对端`point-to-point` 数据传输解决方案
6. TCP有流量控制机制：流量控制是一种机制，服务器通过这种机制首先检查接收方的容量，以了解它可以接受多少数据以及以什么速度接受，当接收方不堪重负时，发送方需要控制数据传输速度。这也意味着服务器将在发送每个数据包之前等待流量控制信息，从而使其速度变慢且效率降低。UDP则直接抛弃接收方无法处理的数据包。
7. UDP 不控制拥塞，而 TCP 实现拥塞避免算法，TCP会等待拥塞的网络通道畅通后再恢复传输，保证数据包不丢失。

    在流量控制中，TCP 根据接收方的接受窗口大小调整数据传输。 在这里，TCP 考虑了网络基础设施的容量。 除了接收者之外，网络还决定了数据传输的快慢程度。 因此，将传输速度校准到网络可接受的水平至关重要。 TCP 通过拥塞避免算法和策略实现这一点。

    10 种以上的拥塞避免机制，如：TCP Tahoe（在发生数据丢失时重新建立慢启动连接）、TCP Reno（为拥塞后恢复启动快速重传）

8. TCP与UDP头不同  TCP 使用可变长度的标头来支持更复杂的数据传输，可以有 20 到 60 个字节。UDP 头只能有八个字节。
9. UDP适用于在线实时数据传输，TCP不支持



Transmission Control Protocol (TCP)	               User Datagram Protocol (UDP)

Nature of connectivity	

TCP is connection-oriented.	
UDP is a message-oriented and connectionless protocol.

Error checking	
It uses timeout, checksum, and acknowledgment to prevent and correct errors. 	
It uses only checksum to avoid errors and cannot correct errors.

Order of data transmission	
TCP data packets have a sequencing number in the header to maintain the order of transmission.	
UDP data packets arrive in no fixed order, and incorrect sequencing cannot be detected or corrected.

Speed and efficiency	
It has a longer latency time and consumes more resources.	
It starts the connection faster, delivers data at lower latency, and consumes fewer resources.

Multicast and broadcast	
It is ideal for point-to-point transmission only, with confirmation of receipt.	
It is suitable for broadcasting data packets to an entire group of endpoints, regardless of whether they listen.

Flow control	
It utilizes flow control information to calibrate the pace of data transmission, to avoid overwhelming the recipient.	
It does not use flow control and sends data at a rate suitable for the originating server.

Congestion control	
It implements congestion avoidance algorithms to prevent data packets from getting lost in a congested network.	
It cannot control network congestion and drops packets if too much traffic is on the pathway.

Reliability	
TCP’s most significant advantage is that it is highly reliable.	
Its architecture is designed in a manner that makes it inherently unreliable.

Header	
It uses a variable-length header, of up to 60 bytes.	
It uses a fixed-length header of only eight bytes.

Application	
It is suitable for use cases where data integrity, including images, web pages, data files, etc. matters more than transmission speed.	
It is ideal for live data transmission (e.g., media), where transmission is so fast that a few dropped packets do not matter.
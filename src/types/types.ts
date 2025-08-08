export interface ContactType {
  phone: string;
  first_name: string;
  last_name: string;
  city: string;
}

export interface MessageType {
  timestamp: string;
  sender: string;
  text: string;
}

export interface ConversationType {
  phone: string;
  messages: MessageType[];
}

export interface ContactWithConversation extends ContactType {
  lastMessage?: MessageType;
  messageCount: number;
  messages: MessageType[];
}

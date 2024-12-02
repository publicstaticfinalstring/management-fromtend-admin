<template>
  <div id="app">
    <Card title="客户与合同数据分析助手" class="chat-container">
      <div class="messages">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['message', message.role]"
        >
          <div class="message-content">
            <Avatar v-if="message.role === 'assistant'" icon="user" />
            <div class="content">
              <strong>{{ message.role === "user" ? "用户" : "助手" }}:</strong>
              <p>{{ message.content }}</p>
            </div>
            <Avatar v-if="message.role === 'user'" icon="user" />
          </div>
        </div>
      </div>
      <div class="input-container">
        <Input
          v-model="userMessage"
          @keyup.enter="sendMessage"
          placeholder="请输入您的问题..."
          class="input-box"
        />
        <Button type="primary" @click="sendMessage" :loading="loading">{{
          loading ? "发送中..." : "发送"
        }}</Button>
      </div>
    </Card>
  </div>
</template>

<script>
import axios from "axios";
import { Card, Avatar, Input, Button } from "@arco-design/web-vue";

export default {
  name: "ApiChatPage",
  components: { Card, Avatar, Input, Button },
  data() {
    return {
      loading: false,
      error: null,
      userMessage: "",
      messages: [
        { role: "assistant", content: "您好！请问有什么我可以帮助您的？" },
      ],
    };
  },
  methods: {
    formatMessageContent(content) {
      // 将 Markdown 格式转换为 HTML 格式并返回
      return content.replace(/\n/g, "<br>");
    },
    sendMessage() {
      if (this.userMessage.trim() === "") {
        return;
      }

      // 添加用户消息到对话框中
      this.messages.push({ role: "user", content: this.userMessage });
      this.userMessage = "";
      this.loading = true;
      this.error = null;

      // 发送请求到后端
      axios
        .post("http://127.0.0.1:8000/gpt/analyze_data/", {
          messages: this.messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        })
        .then((response) => {
          this.messages.push({
            role: "assistant",
            content: response.data.report,
          });
        })
        .catch((error) => {
          this.error = error.response
            ? error.response.data.error
            : error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
#app {
  max-width: 800px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.chat-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.messages {
  border: 1px solid #ccc;
  padding: 15px;
  height: 400px;
  overflow-y: auto;
  background: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 20px;
}

.message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.message.user {
  justify-content: flex-end;
}

.message.assistant {
  justify-content: flex-start;
}

.message-content {
  display: flex;
  align-items: center;
  max-width: 70%;
}

.content {
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.input-container {
  display: flex;
  gap: 10px;
  align-items: center;
}

.input-box {
  width: 100%;
  height: 40px;
}
</style>

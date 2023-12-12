# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:latest

COPY ./webApp/dist /usr/share/nginx/html

# 暴露 Nginx 监听的端口（默认为80）
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

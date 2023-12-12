### 启动项目：
```shell
	# 前端镜像打包
	$ docker build -t web-app . 
	
	# node服务镜像打包
	$ docker build -t node-server -f NodeDockerfile .
	
	# 导出镜像
	$ docker save web-app -o web-app.tar 
	# 复制镜像包到其他节点 
	$ scp ./web-app.tar root@192.168.24.135:/root
	
	# 同上 scp -r为目录 
	$ docker save node-server -o node-server.tar
	$ scp node-server.tar root@192.168.24.135:/root 
	
	# 到其他节点加载镜像
	$ docker load -i /root/web-app.tar
	$ docker load -i /root/node-server.tar
	
	# 启动服务&部署
	$ kubectl apply -f ./config/server/nodejs-app-service.yaml
	$ kubectl apply -f ./config/server/nodejs-app-deployment.yaml
	$ kubectl apply -f ./config/server/web-app-service.yaml
	$ kubectl apply -f ./config/server/web-app-deployment.yaml
	
```
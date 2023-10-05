FROM adoptopenjdk/openjdk11

ENV PUBLIC_IP=3.35.166.128
ENV DB_PORT=3306
ENV DB_NAME=dream
ENV DB_USER_NAME=dreamfamily11
ENV DB_USER_PASSWORD=gmbefamily11!

## mongoDB
ENV MONGO_DB_PORT=27017
ENV MONGO_URI=ssafy.ngivl.mongodb.net
ENV MONGO_DATABASE_NAME=S09P23B301
ENV MONGO_ID=S09P23B301
ENV MONGO_PASSWORD=ngiAOg372H

#JWT ??
ENV FRONT_URL=https://j9b301.p.ssafy.io/sunset/token
#ENV FRONT_URL=http://localhost:3000/sunset/token

ENV jwt.secretKey=F22rV7dQ4uHx2P6gv5lsJrE8mUcYn2023


# Access Token Configuration
#1??(60?) (1000L(ms -> s) * 60L(s -> m) * 60L(m -> h))
ENV jwt.access.expiration=2419200000
ENV jwt.access.header=Authorization

# Refresh Token Configuration
# (1000L(ms -> s) * 60L(s -> m) * 60L(m -> h) * 24L(h -> ??) * 14(2?))
ENV jwt.refresh.expiration=1209600000 
ENV jwt.refresh.header=Authorization-refresh


## Kakao OAuth2
ENV spring.security.oauth2.client.registration.kakao.client-id=b23cd8eabfec28093bf91fefbce93b8d
ENV spring.security.oauth2.client.registration.kakao.client-secret=JD9ioEv8L3ldZi595W95rHW7ifZjdxPg
ENV spring.security.oauth2.client.registration.kakao.redirect-uri=https://j9b301.p.ssafy.io/login/oauth2/code/kakao
ENV spring.security.oauth2.client.registration.kakao.client-authentication-method=POST
ENV spring.security.oauth2.client.registration.kakao.authorization-grant-type=authorization_code
ENV spring.security.oauth2.client.registration.kakao.scope=profile_nickname,account_email,profile_image
ENV spring.security.oauth2.client.registration.kakao.client-name=Kakao
#
## Kakao OAuth2 Provider
ENV spring.security.oauth2.client.provider.kakao.authorization-uri=https://kauth.kakao.com/oauth/authorize
ENV spring.security.oauth2.client.provider.kakao.token-uri=https://kauth.kakao.com/oauth/token
ENV spring.security.oauth2.client.provider.kakao.user-info-uri=https://kapi.kakao.com/v2/user/me
ENV spring.security.oauth2.client.provider.kakao.user-name-attribute=id

# S3
ENV S3_URL=https://s3.ap-northeast-2.amazonaws.com/b301.s3test.bucket/
ENV S3_BUCKET=b301.s3test.bucket
ENV CREDENTIALS_ACCESS_KEY=AKIAZQOLJJ2REVU7EXKU
ENV CREDENTIALS_SECRET_KEY=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
ENV REGION_STATIC=ap-northeast-2

# Redis
ENV REDIS_PORT=9707
ENV REDIS_PASSWORD=gmbefamily11!

COPY ./dream-0.0.1-SNAPSHOT.jar /dream-0.0.1-SNAPSHOT.jar
CMD ["java", "-jar", "dream-0.0.1-SNAPSHOT.jar"]

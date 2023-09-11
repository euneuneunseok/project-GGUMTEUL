package dream.security.jwt.filter;

import dream.security.jwt.service.JwtService;
import dream.user.domain.User;
import dream.user.domain.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;
//import org.springframework.web.filter.OncePerRequestFilter;

//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;

@RequiredArgsConstructor
@Slf4j
public class JwtAuthentificationProcessingFilter extends OncePerRequestFilter {

    private static final String NO_CHECK_URL = "/login";
    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String BEARER_PREFIX = "Bearer ";

    private final JwtService jwtService;
    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //jwt를 검증할 필요가 없는 url은 다음 filter호출 후 메서드 종료하기
        if(request.getRequestURI().equals(NO_CHECK_URL)){
            filterChain.doFilter(request, response);
            return;
        }

        Optional<String> refreshToken = jwtService.extractRefreshToken(request)
                .filter(jwtService::isRefreshTokenValid);

        if(refreshToken.isPresent()){
            checkRefreshTokenAndReIssueNewToken(response, refreshToken.get());

        }else{
        }

    }

    public void checkRefreshTokenAndReIssueNewToken(HttpServletResponse response, String refreshToken) {
        if(jwtService.isRefreshTokenValid(refreshToken)){
            Optional<Long> userIdOptional = jwtService.extractUserIdFromRefreshToken(refreshToken);
            jwtService.removeRefreshToken(refreshToken);

            if(userIdOptional.isPresent()){
                log.info("RefreshToken & AccessToken 재발급");
                jwtService.sendTokenDto(response,jwtService.createTokenDto(userIdOptional.get()));
            }

        }

    }

    public void checkAccessToken(){

    }
//    public void saveAuthentication(User myUser) {
//
//
//        UserDetails userDetailsUser = org.springframework.security.core.userdetails.User.builder()
//                .username(myUser.getEmail())
//
//                .roles(myUser.getRole().name())
//                .build();
//
//        Authentication authentication =
//                new UsernamePasswordAuthenticationToken(userDetailsUser, null,
//                        authoritiesMapper.mapAuthorities(userDetailsUser.getAuthorities()));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//    }



}

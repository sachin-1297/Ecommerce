package com.s2i.config;

import com.s2i.serviceImpl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@EnableWebSecurity
public class MySecurityConfig extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {

    @Value("${app.config.allowed.hosts}")
    private List<String> allowedHosts;

    @Autowired
    private UserDetailsServiceImpl customUserDetailsSerivce;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf()
                .disable()
                .authorizeHttpRequests()
                .antMatchers("/token").permitAll()
                .antMatchers(HttpMethod.POST,"/product/add").permitAll()
                .antMatchers(HttpMethod.GET,"/product//getAll").permitAll()
                .anyRequest().authenticated()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)  throws Exception {
        auth.userDetailsService(customUserDetailsSerivce);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        String[] aa = {};
        registry.addMapping("/**").allowedOrigins(allowedHosts.toArray(aa));
    }
}

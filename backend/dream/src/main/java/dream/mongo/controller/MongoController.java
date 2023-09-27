package dream.mongo.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import dream.common.domain.ResultTemplate;
import dream.mongo.domain.Dream;
import dream.mongo.service.MongoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/mongo")
public class MongoController {

    private final MongoService mongoService;

    @GetMapping(value = "")
    public ResultTemplate mongoTest() {

        List<Dream> response = mongoService.getAllDream();

        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(response).build();
    }

    @GetMapping(value = "/find")
    public ResultTemplate findBest(){

        return mongoService.findBest("비둘기");
    }
    
    @GetMapping(value = "/savetest")
    public ResultTemplate saveTest() throws IOException {

        List<Dream> dreams = new ArrayList<>();
        
        // 파일 읽어서 꿈 객체로 변환
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream("tt1.txt"), StandardCharsets.UTF_8));
        String line;
        while ((line = br.readLine()) != null){
            ObjectMapper objectMapper = new ObjectMapper();
            // JSON 문자열을 Dream 객체로 변환

            Dream dream = objectMapper.readValue(line, Dream.class);
            dreams.add(dream);
        }
        return mongoService.saveDream(dreams);
    }

//    @GetMapping(value = "/findBestDream")
//    public ResultTemplate findBestDream(@RequestPart Req){
//
//    }
}

package dream.mongo.service;

import dream.common.domain.ResultTemplate;
import dream.mongo.domain.dream;
import dream.mongo.repository.MongoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MongoService {

    private final MongoRepository mongoRepository;
    public List<dream> getAllDream() {

        List<dream> response = mongoRepository.findAll();
        return response;
    }

    public ResultTemplate findBest(String title) {

        String regTitle = ".*" + title + ".*";
        List<dream> list = mongoRepository.findByDreamRegex(title);
        return ResultTemplate.builder().status(HttpStatus.OK.value()).data(list).build();
    }
}
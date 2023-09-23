package dream.mongo.service;

import dream.mongo.domain.dream;
import dream.mongo.repository.MongoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
}
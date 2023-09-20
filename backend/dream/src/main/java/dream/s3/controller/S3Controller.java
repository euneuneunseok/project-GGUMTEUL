package dream.s3.controller;

import dream.challenge.service.ChallengeService;
import dream.common.domain.ResultTemplate;
import dream.s3.AwsS3Uploader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/s3")
public class S3Controller {

    private final ChallengeService challengeService;
    private final AwsS3Uploader awsS3Uploader;

    @GetMapping(value = "/day/challenge/item/{challengeId}/image")
    public ResultTemplate getChallengeImage(@PathVariable("challengeId") Long challengeId) {

        return challengeService.getChallengeImage(challengeId);
    }


//    @PostMapping("/upload")
//    public String upload(@RequestParam("file") MultipartFile multipartFile) throws IOException {
//        String fileName = awsS3Uploader.upload(multipartFile, "test");
//        log.info("for upload file name : {}", fileName);
//        return fileName;
//    }

    @PostMapping("/upload/userprofile")
    public String upload(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        String fileName = awsS3Uploader.upload(multipartFile, "userProfile");
        log.info("for upload file name : {}", fileName);
        return fileName;
    }

}


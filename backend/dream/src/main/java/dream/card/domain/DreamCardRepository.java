package dream.card.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DreamCardRepository extends JpaRepository<DreamCard, Long> {

    @Query("select distinct d from DreamCard d join fetch d.dreamCardAuthor join fetch d.dreamCardOwner join fetch d.dreamCardLike")
    Optional<List<DreamCard>> findFetchTestByAll();

    @Query("select d from DreamCard d")
    Optional<List<DreamCard>> findTestByAll();
}

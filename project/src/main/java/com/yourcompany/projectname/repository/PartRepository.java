package com.yourcompany.projectname.repository;

import com.yourcompany.projectname.model.Part;
import com.yourcompany.projectname.model.Line;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PartRepository extends JpaRepository<Part, Long> {

    @Query("SELECT p FROM Part p WHERE p.partStatus = 'A' ORDER BY p.partNo ASC")
    List<Part> findActivePartNumbers();

    @Query("SELECT p FROM Part p WHERE p.unitId = :unitId AND p.groupId = :groupId AND p.lineId = :lineId ORDER BY p.partNo ASC")
    List<Part> findEditablePartNumbers(@Param("unitId") String unitId, @Param("groupId") String groupId, @Param("lineId") String lineId);

    @Query("SELECT COUNT(p) > 0 FROM Part p WHERE p.partNo = :partNo")
    boolean existsByPartNumber(@Param("partNo") String partNo);

    Optional<Part> findByUnitIdAndGroupIdAndLineIdAndPartNo(String unitId, String groupId, String lineId, String partNo);

    @Override
    <S extends Part> S save(S part);

    @Query("SELECT DISTINCT l.lineId, l.lineDesc FROM Line l WHERE l.unitId = :unitId AND l.groupId = :groupId ORDER BY l.lineId ASC")
    List<Line> getLineLov(@Param("unitId") String unitId, @Param("groupId") String groupId);

    @Query("SELECT DISTINCT l.lineId, l.lineDesc FROM Line l, Part p WHERE l.lineId = p.lineId AND p.unitId = :unitId AND p.groupId = :groupId ORDER BY l.lineId ASC")
    List<Line> getEditLineLov(@Param("unitId") String unitId, @Param("groupId") String groupId);

    @Query("SELECT COUNT(l) > 0 FROM Line l WHERE l.lineId = :lineId AND l.lineDesc = :lineDesc AND l.unitId = :unitId AND l.groupId = :groupId")
    boolean validateLineId(@Param("lineId") String lineId, @Param("lineDesc") String lineDesc, @Param("unitId") String unitId, @Param("groupId") String groupId);
}

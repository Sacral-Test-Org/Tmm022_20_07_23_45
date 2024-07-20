package com.yourcompany.projectname.controller;

import com.yourcompany.projectname.dto.PartDTO;
import com.yourcompany.projectname.dto.LineDTO;
import com.yourcompany.projectname.service.PartService;
import com.yourcompany.projectname.service.LineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/parts")
public class PartController {

    @Autowired
    private PartService partService;

    @Autowired
    private LineService lineService;

    @GetMapping("/part-numbers")
    public List<PartDTO> getPartNumbers(@RequestParam int globalParameter) {
        return partService.getPartNumbers(globalParameter);
    }

    @GetMapping("/check-part-number")
    public boolean checkPartNumberExistence(@RequestParam String partNumber, @RequestParam int globalParameter) {
        return partService.checkPartNumberExistence(partNumber, globalParameter);
    }

    @PostMapping("/save")
    public ResponseEntity<String> savePart(@RequestBody PartDTO partDTO) {
        partService.savePart(partDTO);
        return ResponseEntity.ok("Part saved successfully");
    }

    @PutMapping("/update")
    public ResponseEntity<String> updatePart(@RequestBody PartDTO partDTO) {
        partService.updatePart(partDTO);
        return ResponseEntity.ok("Part updated successfully");
    }

    @GetMapping("/line-lov")
    public ResponseEntity<List<LineDTO>> getLineLov() {
        List<LineDTO> lineLov = lineService.getLineLov();
        return ResponseEntity.ok(lineLov);
    }

    @GetMapping("/edit-line-lov")
    public ResponseEntity<List<LineDTO>> getEditLineLov() {
        List<LineDTO> editLineLov = lineService.getEditLineLov();
        return ResponseEntity.ok(editLineLov);
    }

    @GetMapping("/validate-line-id")
    public ResponseEntity<Boolean> validateLineId(@RequestParam String lineId, @RequestParam String lineDesc, @RequestParam String unitId, @RequestParam String groupId) {
        boolean isValid = lineService.validateLineId(lineId, lineDesc, unitId, groupId);
        return ResponseEntity.ok(isValid);
    }
}
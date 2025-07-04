package br.com.pecepoli.demo.controller;


import br.com.pecepoli.demo.domain.Pacote;
import br.com.pecepoli.demo.repository.PacoteRepository;
import br.com.pecepoli.demo.service.PacoteService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PacoteController {
    @Autowired
    private PacoteRepository repository;

    private final PacoteService pacoteService;

    public PacoteController(PacoteService pacoteService) {
        this.pacoteService = pacoteService;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/pacotes")
    public ResponseEntity<List<Pacote>> obterPacotes(@RequestParam(value="q", required = false) String criteria){
        List<Pacote> pacotes;
        pacotes = pacoteService.obterPacotes(criteria);
        return ResponseEntity.ok(pacotes);
    }
}
